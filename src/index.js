import styles from './styles.css';
import dogImg from './utils/images/dog.jpg';
import project1 from './utils/images/project1.jpg';
import project2 from './utils/images/project2.jpg';
import project3 from './utils/images/project3.jpg';
import project4 from './utils/images/project4.jpg';
import project5 from './utils/images/project5.jpg';
import project6 from './utils/images/project6.jpg';


const header = document.querySelector('header');
const img = header.querySelector('img');
const projectImages = document.querySelectorAll('.projectImage');
const images = [project1, project2, project3, project4, project5, project6];
img.src = dogImg;

projectImages.forEach((projectImage, index) => {
    projectImage.src = images[index];
});