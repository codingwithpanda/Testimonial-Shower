const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Coding With Panda',
    position: 'Marketing',
    photo:
      'hero.png',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'coding with panda',
    position: 'Software Engineer',
    photo: 'hero.png',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde libero dolore facilis possimus ipsum rem accusantium alias voluptatum, earum tempora ex, dolorum quibusdam temporibus soluta sapiente nobis vero ab laboriosam error ipsa veritatis sequi doloribus veniam. Cupiditate rem dignissimos voluptas, fugit obcaecati cumque perspiciatis ut.',
  },
  {
    name: 'coding with panda',
    position: 'Data Entry',
    photo: 'hero.png',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'coding with panda',
    position: 'Receptionist',
    photo: 'hero.png',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'coding with panda',
    position: 'Graphic Designer',
    photo: 'hero.png',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'coding with panda',
    position: 'Accountant',
    photo:
      'hero.png',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'coding with panda',
    position: 'Director',
    photo: 'hero.png',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 2000)
