document.addEventListener("DOMContentLoaded", function () {
            const filterButtons = document.querySelectorAll(".filter-button");
            const projects = document.querySelectorAll(".project");
            const noResultMessage = document.querySelector(".no-result");

            filterButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const filterValue = button.getAttribute("data-filter");
                    let foundProjects = false; // Flag to track if any projects match the filter

                    projects.forEach((project) => {
                        if (filterValue === "all" || project.classList.contains(filterValue)) {
                            project.style.display = "block";
                            foundProjects = true;
                        } else {
                            project.style.display = "none";
                        }
                    });

                    // Show/hide the "No results" message based on whether any projects matched the filter
                    if (foundProjects) {
                        noResultMessage.style.display = "none";
                    } else {
                        noResultMessage.style.display = "block";
                    }
                });
            });
        });
