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

    const handlerHref = (event, path) => {
        if (path === 'amisleak') {
            event.preventDefault()
            setModalVisible(true)
        }
    }

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div className={cl.block}>
            <div className={cl.project}>
                <div className={cl.descr}>
                    <div className={cl.title}>{project.title}</div>
                    <div className={cl.subtitle}>{project.subtitle}</div>
                    <div className={cl.link}>
                        <a href={project.path} onClick={(event) => handlerHref(event, project.path)}>{project.site}</a>
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
            {modalVisible &&
                <div className={cl.modal}>
                    <div className={cl.container}>
                        <div className={cl.containerIMG}>
                            <img src={require('../../assets/projects/p3/1.png')} alt="1" />
                        </div>
                        <div className={cl.containerIMG}>
                            <img src={require('../../assets/projects/p3/2.png')} alt="2" />
                        </div>
                        <div className={cl.containerIMG}>
                            <img src={require('../../assets/projects/p3/3.png')} alt="3" />
                        </div>
                        <div className={cl.containerIMG}>
                            <img src={require('../../assets/projects/p3/4.png')} alt="4" />
                        </div>
                    </div>
                    <button className={cl.containerButton} onClick={() => setModalVisible(false)}>close</button>
                </div>
            }
        </div>
    )
}

export default Project