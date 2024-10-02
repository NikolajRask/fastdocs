"use client"

import React, {  useRef, useState } from 'react'
import styles from '../styles.module.scss'
import { useMemory} from './hooks/useMemory'
import { CaretDownIcon, TrashIcon } from '@radix-ui/react-icons';
import { cuid } from '@/docs/utils/utils';
import { Pen, Pencil, PlusIcon, SquareArrowOutUpRight, Trash2 } from 'lucide-react';
import useSettings from '@/docs/utils/settings/use-settings';

export interface DataType {
    name: string;
    id: string;
    pages: {
        id: string,
        name: string,
        content: string
    }[]
}

interface ProjectManagerProps {
    currentMarkdown: string,
    setCurrentMarkdown: React.Dispatch<React.SetStateAction<string>>
    currentPage: string,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const ProjectManager = ({
    currentMarkdown,
    currentPage,
    setCurrentMarkdown,
    setCurrentPage
}: ProjectManagerProps) => {

    const [projects, setProjects] = useState<DataType[]>(useMemory("projects") as DataType[])


    
    if (useMemory("projects") == undefined) {
        const defaultPageID = cuid()
        useMemory("projects", [
            {
                name: "Default Project",
                id: cuid(),
                pages: [
                    {
                        name: "Default Page",
                        id: defaultPageID,
                        content: ""
                    }
                ]
            }
        ])
        
        if (useMemory("currentPage") == undefined) {
            useMemory("currentPage", defaultPageID)
            setCurrentPage(defaultPageID)
        }
    }


    function addPage(projectId: string) {
        const projectIndex = projects.findIndex((x) => x.id == projectId)

        let pageId = cuid()

        let newProjectVersion = projects
        
        let copy = newProjectVersion[projectIndex]
        copy.pages.push({
            name: "New Page",
            id: pageId,
            content: ""
        })
        newProjectVersion[projectIndex] = copy

        useMemory('currentPage', pageId)

        useMemory("projects", newProjectVersion)

        update()
    }

    function addProject() {
        let newProjectVersion = projects
        
        newProjectVersion.push({
            name: "New Project",
            id: cuid(),
            pages: []
        })
        
        useMemory("projects", newProjectVersion)
        update()
    }

    function update() {
        setProjects(useMemory("projects") as DataType[])
    }

    return (
        <div className={styles.projectManager}>
            {
                projects?.map((project, index: number) => {
                    return (
                        <Project 
                            update={() => {
                                update()
                            }} 
                            uid={project.id} 
                            addPage={() => {
                                addPage(project.id)
                            }} 
                            title={project.name} 
                            key={index}
                        >
                            {
                                project.pages.map((page, index) => {
                                    return (
                                        <Page update={() => {update()}} setCurrentPage={setCurrentPage} key={index} uid={page.id} currentPage={currentPage}>{page.name}</Page>
                                    )
                                })
                            }
                        </Project>
                    )
                })
            }
            <p 
                className={styles.addProjectBtn}
                onClick={() => {
                    addProject()
                }}
            >
                <PlusIcon/>
                Add Project
            </p>
        </div>
    )
}

export default ProjectManager


interface ProjectProps {
    title: string,
    children: React.ReactNode,
    addPage: () => void
    uid: string,
    update: () => void
}

function Project({
    title,
    children,
    addPage,
    uid,
    update
}: ProjectProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
    const [contextMenuPosition, setContextMenuPosition] = useState({
        x: 0,
        y: 0,
    })
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(title as string)
    
    const editRef = useRef<HTMLInputElement>(null)

    function deleteProject() {
        let projects = useMemory("projects") as DataType[]

        const newProjects = projects.filter((project) => project.id != uid)

        useMemory("projects", newProjects)

        update()
    }

    function editProjectName(newName: string) {

        let projects = useMemory("projects") as DataType[]

        const currentProjectIndex = projects.findIndex((project) => project.id = uid)
        
        if (currentProjectIndex != -1) {
            let currentProject = projects[currentProjectIndex]

            currentProject.name = newName

            projects[currentProjectIndex] = currentProject

            useMemory("projects", projects)
            update()
        } 
    }

    return (
        <>
            {
                isContextMenuOpen && (
                    <>
                        <div 
                            style={{
                                width: "100vw",
                                position: "fixed",
                                height: "100vh",
                                top: 0,
                                left: 0,
                                zIndex: 100,
                            }}
                            onClick={() => {
                                setIsContextMenuOpen(false)
                            }}
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            
                        </div>
                        <div   
                            className={styles.contextMenu}
                            style={{
                                left: contextMenuPosition.x,
                                top: contextMenuPosition.y
                            }}
                        >
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    setIsOpen(true)
                                    addPage()
                                }}
                            >
                                <PlusIcon/>
                                <span>Add Page</span>
                            </div>
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    setIsEditing(true)
                                    window.setTimeout(() => {
                                        editRef.current?.focus()
                                    }, 100)
                                }}
                            >
                                <Pencil/>
                                <span>Rename Project</span>
                            </div>
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    deleteProject()
                                }}
                            >
                                <Trash2/>
                                <span>Delete Project</span>
                            </div>
                        </div>
                    </>
                )
            }
            <div className={styles.project}>
                {
                    isEditing == true ? (
                        <p 
                            className={styles.projectTitle}
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setContextMenuPosition({
                                    x: e.clientX,
                                    y: e.clientY
                                })
                                setIsContextMenuOpen(true)
                            }}
                        >
                            <input 
                                ref={editRef}
                                className={styles.projectEdit}
                                value={editValue}
                                onChange={(e) => {
                                    setEditValue(e.target.value)
                                }}
                                onBlur={() => {
                                    setIsEditing(false)
                                    editProjectName(editValue)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        setIsEditing(false)
                                        editProjectName(editValue)
                                    }
                                }}
                            />
                        </p>
                    ) : (
                        <p 
                            className={styles.projectTitle}
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setContextMenuPosition({
                                    x: e.clientX,
                                    y: e.clientY
                                })
                                setIsContextMenuOpen(true)
                            }}
                        >
                            {title} <CaretDownIcon className={styles.arrowIcon} style={{
                                transform: !isOpen ? "rotate(0deg)" : "rotate(-180deg)"
                            }}/>
                        </p>
                    )
                }
                <div className={styles.projectPages} style={{
                    height: isOpen ? "fit-content" : "0px"
                }}>
                    {children}
                </div>
            </div>
        </>
    )
}

interface PageProps {
    uid: string
    children: React.ReactNode
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    currentPage: string,
    update: () => void
}

function Page({
    update,
    uid,
    children,
    setCurrentPage,
    currentPage,
}: PageProps) {

    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(children as string)
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
    const [contextMenuPosition, setContextMenuPosition] = useState({
        x: 0,
        y: 0,
    })

    const editRef = useRef<HTMLInputElement>(null)

    function editPageName(newName: string) {
        let projects = useMemory("projects") as DataType[]

        const currentProjectIndex = projects.findIndex((project) => project.pages.map((page) => page.id).includes(uid))
        
        if (currentProjectIndex != -1) {
            let currentProject = projects[currentProjectIndex]

            const currentPageIndex = currentProject.pages.findIndex((page) => page.id == uid)

            if (currentPageIndex != -1) {
                let currentPageLocal = currentProject.pages.find((page) => page.id == uid)

                if (currentPageLocal?.name) {
                    currentPageLocal.name = newName

                    currentProject.pages[currentPageIndex] = currentPageLocal

                    projects[currentProjectIndex] = currentProject

                    useMemory("projects", projects)
                    update()
                }

            }
        }
    }

    function deletePage() {
        let projects = useMemory("projects") as DataType[]

        const currentProjectIndex = projects.findIndex((project) => project.pages.map((page) => page.id).includes(uid))
        
        if (currentProjectIndex != -1) {
            let currentProject = projects[currentProjectIndex]

            const currentPageIndex = currentProject.pages.findIndex((page) => page.id == uid)

            if (currentPageIndex != -1) {
                let currentPageLocal = currentProject.pages.find((page) => page.id == uid)

                if (currentPageLocal?.name) {

                    currentProject.pages.splice(currentPageIndex, 1)

                    projects[currentProjectIndex] = currentProject

                    useMemory("projects", projects)
                    update()
                }

            }
        }
    }

    const handleFocus = () => {
        // Ensure inputRef.current is not null before accessing it
        window.setTimeout(() => {
            if (editRef.current) {
              editRef.current.focus(); // Focus the input field
            }
        }, 100)
    };

    return (
        <>
            {
                isContextMenuOpen && (
                    <>
                        <div 
                            style={{
                                width: "100vw",
                                position: "fixed",
                                height: "100vh",
                                top: 0,
                                left: 0,
                                zIndex: 100,
                            }}
                            onClick={() => {
                                setIsContextMenuOpen(false)
                            }}
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            
                        </div>
                        <div   
                            className={styles.contextMenu}
                            style={{
                                left: contextMenuPosition.x,
                                top: contextMenuPosition.y
                            }}
                        >
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    useMemory("currentPage", uid)
                                    setCurrentPage(uid)
                                }}
                            >
                                <SquareArrowOutUpRight />
                                <span>Open Page</span>
                            </div>
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    if (isEditing == false) {
                                        setIsEditing(true)
                                        handleFocus()
                                    }
                                }}
                            >
                                <Pencil />
                                <span>Rename Page</span>
                            </div>
                            <div 
                                className={styles.contextMenuItem}
                                onClick={() => {
                                    setIsContextMenuOpen(false)
                                    deletePage()
                                }}
                            >
                                <Trash2/>
                                <span>Delete Page</span>
                            </div>
                        </div>
                    </>
                )
            }
            <div
                onContextMenu={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setContextMenuPosition({
                        x: e.clientX,
                        y: e.clientY
                    })
                    setIsContextMenuOpen(true)
                }}
                onDoubleClick={() => {
                    if (isEditing == false) {
                        
                        setIsEditing(true)
                        handleFocus()
                    }
                }}
                onClick={() => {
                    useMemory("currentPage", uid)
                    setCurrentPage(uid)
                }}
                className={styles.page}
            >
                {isEditing ? (
                    <input 
                        ref={editRef}
                        className={styles.projectPageEdit}
                        value={editValue}
                        onChange={(e) => {
                            setEditValue(e.target.value)
                        }}
                        onBlur={() => {
                            setIsEditing(false)
                            editPageName(editValue)
                        }}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                setIsEditing(false)
                                editPageName(editValue)
                            }
                        }}
                    />
                ) : (
                    <p 
                        className={styles.projectPage}
                        style={{
                            color: useMemory("currentPage") == uid ? useSettings().color : "var(--text-color)"
                        }}
                    >{children}</p>
                )}
            </div>
        </>
    )
}
