"use client"

import React, {  useState } from 'react'
import styles from '../styles.module.scss'
import { useMemory} from './hooks/useMemory'
import { CaretDownIcon } from '@radix-ui/react-icons';
import { cuid } from '@/docs/utils/utils';
import { PlusIcon } from 'lucide-react';
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

        let newProjectVersion = projects
        
        let copy = newProjectVersion[projectIndex]
        copy.pages.push({
            name: "New Page",
            id: cuid(),
            content: ""
        })
        newProjectVersion[projectIndex] = copy

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
                        <Project title={project.name} key={index}>
                            {
                                project.pages.map((page, index) => {
                                    return (
                                        <Page setCurrentPage={setCurrentPage} key={index} uid={page.id} currentPage={currentPage}>{page.name}</Page>
                                    )
                                })
                            }
                            <button 
                                onClick={() => {
                                    addPage(project.id)
                                }}
                                className={styles.newPageBtn}
                            >Add Page</button>
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
    children: React.ReactNode
}

function Project({
    title,
    children
}: ProjectProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.project}>
            <p 
                className={styles.projectTitle}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {title} <CaretDownIcon className={styles.arrowIcon} style={{
                    transform: !isOpen ? "rotate(0deg)" : "rotate(-180deg)"
                }}/>
            </p>
            <div className={styles.projectPages} style={{
                height: isOpen ? "fit-content" : "0px"
            }}>
                {children}
            </div>
        </div>
    )
}

interface PageProps {
    uid: string
    children: React.ReactNode
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    currentPage: string
}

function Page({
    uid,
    children,
    setCurrentPage,
    currentPage,
}: PageProps) {

    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(children as string)

    return (
        <div
            onDoubleClick={() => {
                if (isEditing == false) {
                    setIsEditing(true)
                }
            }}
            onClick={() => {
                console.log(uid)
                useMemory("currentPage", uid)
                setCurrentPage(uid)
            }}
            className={styles.page}
        >
            {isEditing ? (
                <input 
                    className={styles.projectPageEdit}
                    value={editValue}
                    onChange={(e) => {
                        setEditValue(e.target.value)
                    }}
                    onBlur={() => {
                        setIsEditing(false)
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            setIsEditing(false)
                        }
                    }}
                />
            ) : (
                <p 
                    className={styles.projectPage}
                    style={{
                        color: currentPage == uid ? useSettings().color : "var(--text-color)"
                    }}
                >{children}</p>
            )}
        </div>
    )
}
