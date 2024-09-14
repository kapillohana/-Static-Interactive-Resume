// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    // Check if both elements exist before adding event listener
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            // Toggle the display style of the skills section
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block'; // Show the section
                toggleButton.textContent = 'Hide Skills'; // Update button text
            }
            else {
                skillsSection.style.display = 'none'; // Hide the section
                toggleButton.textContent = 'Show Skills'; // Update button text
            }
        });
    }
    else {
        console.error('Toggle button or skills section not found in the DOM.');
    }
});
