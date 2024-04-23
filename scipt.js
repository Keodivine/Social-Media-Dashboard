<script>
    document.addEventListener("DOMContentLoaded", function() {
        const donutChart = document.querySelector('.donut-chart');
        const porciones = donutChart.querySelectorAll('.recorte');

        // Function to animate the donut chart
        function animateDonutChart() {
            let total = 0;
            porciones.forEach(porcion => {
                const valor = parseInt(porcion.querySelector('.quesito').getAttribute('data-rel'));
                total += valor;
            });

            let acumulado = 0;
            porciones.forEach(porcion => {
                const porcentaje = parseInt(porcion.querySelector('.quesito').getAttribute('data-rel'));
                const angulo = 360 * porcentaje / total;
                const rotation = `rotate(${acumulado}deg)`;
                const rotationPlusAngle = `rotate(${acumulado + angulo}deg)`; // Fixed angle calculation
                acumulado += angulo;

                porcion.style.transform = rotation;
                porcion.querySelector('.quesito').style.transform = rotationPlusAngle;
            });
        }

        // Function to display tooltips with percentages when hovering over each segment
        function displayTooltip() {
            porciones.forEach(porcion => {
                const tooltip = document.createElement('span');
                const porcentaje = parseInt(porcion.querySelector('.quesito').getAttribute('data-rel'));
                tooltip.textContent = `${porcentaje}%`;
                tooltip.classList.add('tooltip');
                porcion.appendChild(tooltip);

                porcion.addEventListener('mouseenter', () => {
                    tooltip.style.opacity = 1;
                });

                porcion.addEventListener('mouseleave', () => {
                    tooltip.style.opacity = 0;
                });
            });
        }

        // Call the functions to animate the chart and display tooltips
        animateDonutChart();
        displayTooltip();
    });
</script>
