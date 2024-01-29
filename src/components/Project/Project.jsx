import React, { useEffect, useMemo, useState } from 'react'
import cl from './Project.module.css'

const Project = ({ project }) => {
    const [windowWidth, setWindowWidth] = useState('')

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    return (
        <div className={cl.project}>
            <div className={cl.descr}>
                <div className={cl.title}>{project.title}</div>
                <div className={cl.subtitle}>{project.subtitle}</div>
                <div className={cl.link}>
                    <a href={''}>{project.site}</a>
                </div>
                <div className={cl.tools}>
                    {project.tools.map(tool =>
                        <div className={cl.tool}>{tool}</div>
                    )}
                </div>
            </div>
            {windowWidth <= 768 ? <div className={cl.image} style={{ backgroundImage: `url(./assets/projects/${project.img}/ipad-${project.img}.png)` }}></div> :
                windowWidth <= 425 ? <div className={cl.image} style={{ backgroundImage: `url(./assets/projects/${project.img}/iphone-${project.img}.png)` }}></div> : <div className={cl.image} style={{ backgroundImage: `url(./assets/projects/${project.img}/mac-${project.img}.png)` }}></div>
            }
        </div>
    )
}

export default Project