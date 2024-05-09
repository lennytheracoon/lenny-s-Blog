interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Berries Classifier',
    description: `YOLOv8-powered model to sort berries! 🍓🔍 Easily interact with our raccoon-approved interface on Streamlit. Let's get berry-fying! 🌟`,
    imgSrc: '/static/images/berries-classifier.png',
    href: 'https://berries-classifier.streamlit.app/',
  },
  {
    title: 'Blueberry Counter',
    description: `Roboflow Universe model to detect and count blueberry!,  🍓🔍 Easily interact with our raccoon-approved interface on Streamlit. Let's get berry-fying! 🌟`,
    imgSrc: '/static/images/blue-count.png',
    href: 'https://blue-count.streamlit.app/',
  },
]

export default projectsData
