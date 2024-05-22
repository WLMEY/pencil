






// document.addEventListener('DOMContentLoaded', function () {
//     const microphone = document.getElementById('microphone');
//     const svgNS = "http://www.w3.org/2000/svg";

//     microphone.addEventListener('click', function () {
//         // إزالة أي خط موجود مسبقاً
//         const existingLine = document.getElementById('hand-drawn-line');
//         if (existingLine) {
//             existingLine.remove();
//         }

//         // إنشاء عنصر SVG
//         const svg = document.createElementNS(svgNS, 'svg');
//         svg.setAttribute('id', 'hand-drawn-line');
//         svg.setAttribute('width', '200');
//         svg.setAttribute('height', '100');

//         // إنشاء خط باستخدام Rough.js
//         const rc = rough.svg(svg);
//         const line = rc.line(10, 50, 190, 50, {
//             roughness: 2, // زيادة مستوى الخشونة
//             stroke: 'black',
//             strokeWidth: 2
//         });

//         svg.appendChild(line);
//         microphone.appendChild(svg);
//     });
// });