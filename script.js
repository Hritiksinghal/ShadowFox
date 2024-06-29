// script.js

// When the document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas element
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Create gradient for bars
    const createGradient = (ctx, colorStart, colorEnd) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        return gradient;
    };

    // Data and configuration for the chart
    const data = {
        labels: [
            'Cyber Security', 
            'Web Development', 
            'Network Security', 
            'Python', 
            'HTML', 
            'CSS', 
            'Java', 
            'C++', 
            'C', 
            'Kotlin', 
            'JavaScript'
        ],
        datasets: [{
            label: 'Skill Level (%)',
            data: [
                85,  // Cyber Security
                75,  // Web Development
                80,  // Network Security
                90,  // Python
                85,  // HTML
                80,  // CSS
                70,  // Java
                75,  // C++
                70,  // C
                65,  // Kotlin
                80   // JavaScript
            ],
            backgroundColor: [
                createGradient(ctx, 'rgba(255, 99, 132, 0.7)', 'rgba(255, 99, 132, 0.3)'),
                createGradient(ctx, 'rgba(54, 162, 235, 0.7)', 'rgba(54, 162, 235, 0.3)'),
                createGradient(ctx, 'rgba(255, 206, 86, 0.7)', 'rgba(255, 206, 86, 0.3)'),
                createGradient(ctx, 'rgba(75, 192, 192, 0.7)', 'rgba(75, 192, 192, 0.3)'),
                createGradient(ctx, 'rgba(153, 102, 255, 0.7)', 'rgba(153, 102, 255, 0.3)'),
                createGradient(ctx, 'rgba(255, 159, 64, 0.7)', 'rgba(255, 159, 64, 0.3)'),
                createGradient(ctx, 'rgba(199, 199, 199, 0.7)', 'rgba(199, 199, 199, 0.3)'),
                createGradient(ctx, 'rgba(83, 109, 254, 0.7)', 'rgba(83, 109, 254, 0.3)'),
                createGradient(ctx, 'rgba(93, 230, 176, 0.7)', 'rgba(93, 230, 176, 0.3)'),
                createGradient(ctx, 'rgba(255, 174, 201, 0.7)', 'rgba(255, 174, 201, 0.3)'),
                createGradient(ctx, 'rgba(255, 99, 132, 0.7)', 'rgba(255, 99, 132, 0.3)')
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)',
                'rgba(83, 109, 254, 1)',
                'rgba(93, 230, 176, 1)',
                'rgba(255, 174, 201, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + '%';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10
                }
            }
        }
    };

    // Create the chart
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
