import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import {useEffect, useState} from "react";


export default function  Portfolio () {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    let projects =[];
    let formatJson

    const [getResult, setGetResult] = useState([]);

    const [selected, getSelected] = useState("All")

    const setActiveProjectOnLoad = () => {
        let toolbar = document.querySelector('.Toolbar')
        let activeFilter = toolbar.getAttribute("selectedfilter")
        let filterBlocks = [...toolbar.querySelectorAll('div')]

        filterBlocks.map((block) => {
            if(block.innerText == activeFilter) {
                block.classList.add("active")
            }
        })
    }


    const getProjectsByFilter = (selectedFilter) => {
        fetch(`/src/images.json?category=${selectedFilter}/`)
            .then (response => response.json())
            .then((json) => {
                formatJson = json
                formatJson.map(item => {
                    if (item.hasOwnProperty("category")) {

                        if (selectedFilter == item.category) {
                            projects.push(item)
                        }
                        if(selectedFilter == "All"){
                            projects.push(item)
                        }
                    }
                })
                setGetResult(projects)
            })
    }

    const getProjects = () => {
        fetch('/src/images.json')
            .then (response => response.json())
            .then((json) => {
                formatJson = json
                formatJson.map(item => projects.push(item))
                setGetResult(projects)
                setActiveProjectOnLoad()
            })

    }

    useEffect(() => {
        getProjects()
    }, [])


    const handleClick = (e) => {
        let filterName = e.target.innerText
        getSelected(filterName)

        getProjectsByFilter(filterName)
    }



    return (
     <div className="portfolio">
         <Toolbar
             filters={filters}
             selected={selected}
             onSelectFilter={handleClick}/>

         <ProjectList projects={getResult}/>
     </div>
    )


}


