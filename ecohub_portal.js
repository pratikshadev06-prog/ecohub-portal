        const CO2_PER_KM = 0.21; 
        const CO2_PER_BOTTLE = 0.082; 

        function updateRangeLabel(val) {
            document.getElementById('rangeVal').innerText = val;
        }

        function calculateFootprint() {
            let commuteKm = parseFloat(document.getElementById('commute').value) || 0;
            let plasticBottles = parseInt(document.getElementById('plastic').value) || 0;

            let totalFootprint = (commuteKm * CO2_PER_KM) + (plasticBottles * CO2_PER_BOTTLE);
            
            let formattedResult = totalFootprint.toFixed(2);

            let resultContainer = document.getElementById('calcResult');
            let footprintSpan = document.getElementById('footprintVal');
            let messageP = document.getElementById('footprintMessage');

            resultContainer.style.display = 'block';
            footprintSpan.innerText = formattedResult;

            if (totalFootprint < 2.0) {
                messageP.innerText = "🌟 Great job! Your daily carbon impact is low.";
                messageP.style.color = "#2e7d32";
            } else if (totalFootprint >= 2.0 && totalFootprint <= 5.0) {
                messageP.innerText = "⚠️ Moderate impact. Consider public transport or reusable bottles!";
                messageP.style.color = "#f57c00";
            } else {
                messageP.innerText = "🚨 High carbon impact. Explore Eco-Hub programs to reduce footprint!";
                messageP.style.color = "#c62828";
            }
        }

        function handleFormSubmit(event) {
            event.preventDefault(); 

            let name = document.getElementById('studentName').value;
            let email = document.getElementById('studentEmail').value;
            let dept = document.getElementById('department').value;

            if (name.trim() === "" || email.trim() === "") {
                showModal("Validation Error", "Please fill out all required fields marked with *.");
                return;
            }

            showModal("Registration Successful!", `Thank you, ${name}! Your volunteer application for the ${dept.toUpperCase()} department has been recorded.`);
            
            document.getElementById('ecoForm').reset();
            document.getElementById('rangeVal').innerText = '5';
        }

        function showLocationInfo(title, description) {
            showModal(`Campus Location: ${title}`, description);
        }

        function triggerDialogs() {
            let proceed = confirm("Do you want to test native JS dialog prompts?");
            if (proceed) {
                let userFeedback = prompt("Please enter a short eco-friendly tip for our campus:");
                if (userFeedback) {
                    alert("Thank you for your tip: " + userFeedback);
                } else {
                    alert("No input provided.");
                }
            }
        }

        function showModal(title, body) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalBody').innerText = body;
            document.getElementById('customModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('customModal').style.display = 'none';
        }

        window.onload = function() {
            console.log("Campus Eco-Hub Dashboard Loaded Successfully.");
        }