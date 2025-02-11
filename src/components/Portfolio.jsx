import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import projectsData from "../data";
import { useState } from "react";

const Portfolio = () => {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selectedFilter, setSelectedFilter] = useState("All");

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProjects =
        selectedFilter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedFilter);

    return (
        <div className="portfolio">
        <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={handleFilterSelect} />
        <ProjectList projects={filteredProjects} />
        </div>
    );
};

export default Portfolio;
