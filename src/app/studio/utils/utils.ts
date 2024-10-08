/* eslint-disable react-hooks/rules-of-hooks */
import { useMemory } from "../project-manager/hooks/useMemory";
import { DataType } from "../project-manager/ProjectManager";

export function getMenuState(projectId: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const projects = useMemory("projects") as DataType[]

    const projectIndex = projects.findIndex((x) => x.id == projectId)

    const project = projects[projectIndex]

    return project.openInMenu
}

export function toggleMenuState(projectId: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const projects = useMemory("projects") as DataType[]

    const projectIndex = projects.findIndex((x) => x.id == projectId)

    // eslint-disable-next-line prefer-const
    let project = projects[projectIndex]

    project.openInMenu = !project.openInMenu

    // eslint-disable-next-line prefer-const
    let newProjects = projects

    newProjects[projectIndex] = project

    useMemory("projects", newProjects)
}