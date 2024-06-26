// import React from 'react'
// import Comment from './comment'

// const comments = [
//   { id: 1, name: 'Ali Alavi', desc: 'graphic and ui ux designer', text: '"To design more effectively and attractively, you can figure out the right colors."' },
//   { id: 2, name: 'Hesam Porghazian', desc: 'Back-end Developer', text: '"No advice in development: be more pleasant with your backend colleague :)"' },
//   { id: 3, name: 'Mehdi Yahyavi', desc: 'Front-end Developer', text: '"I really hate using Tailwind in my project because personally, I think it makes the project heavier and heavier."' },
//   { id: 5, name: 'Ashkan Ebadi', desc: 'Software Engineer', text: '"Software development is a craft that demands continuous learning and adaptation to new technologies.But I`ve still been driving with Uber :)" ' },
//   { id: 4, name: 'Anonymous', desc: 'Technical team leader', text: '"The essence of programming is to turn ideas into code effectively and efficiently."' },
//   { id: 6, name: 'Filipe Fortes', desc: 'Fullstack Developer', text: '"Debugging is like being the detective in a crime movie where you are also the murderer." ' },
//   { id: 7, name: 'Ron Jeffries', desc: 'graphic and ui ux designer', text: '"Code never lies, comments sometimes do."' },
//   { id: 8, name: 'Thomas Fuchs', desc: 'Product Designer', text: '"Good software, like wine, takes time." ' },
//   { id: 9, name: ' Ellen Ullman', desc: 'DevOps Engineer', text: '"Programming is the art of algorithm design and the craft of debugging errant code."' },
// ]

// export default function CommentWrapper() {
//   return (
//     <>
//       <h3 className='title'>Comments</h3>
//       <section className='comment-wrapper my-12 flex flex-col max-w-screen-xl xl:px-12 xl:max-h-[50rem] flex-wrap gap-8 items-center mx-auto md:max-h-[65rem] max-xl:max-w-[50rem] max- max-md:px-4'>
//         {comments.map(comment => <Comment key={comment.id} {...comment} />)}
//       </section>
//     </>
//   )
// }

import React, { useEffect } from 'react';
import Comment from './comment';

const comments = [
  { id: 1, name: 'Ali Alavi', desc: 'graphic and ui ux designer', text: '"To design more effectively and attractively, you can figure out the right colors."' },
  { id: 2, name: 'Hesam Porghazian', desc: 'Back-end Developer', text: '"No advice in development: be more pleasant with your backend colleague :)"' },
  { id: 3, name: 'Mehdi Yahyavi', desc: 'Front-end Developer', text: '"I really hate using Tailwind in my project because personally, I think it makes the project heavier and heavier."' },
  { id: 5, name: 'Ashkan Ebadi', desc: 'Software Engineer', text: '"Software development is a craft that demands continuous learning and adaptation to new technologies.But I`ve still been driving with Uber :)" ' },
  { id: 4, name: 'Anonymous', desc: 'Technical team leader', text: '"The essence of programming is to turn ideas into code effectively and efficiently."' },
  { id: 6, name: 'Filipe Fortes', desc: 'Fullstack Developer', text: '"Debugging is like being the detective in a crime movie where you are also the murderer." ' },
  { id: 7, name: 'Ron Jeffries', desc: 'graphic and ui ux designer', text: '"Code never lies, comments sometimes do."' },
  { id: 8, name: 'Thomas Fuchs', desc: 'Product Designer', text: '"Good software, like wine, takes time." ' },
  { id: 9, name: ' Ellen Ullman', desc: 'DevOps Engineer', text: '"Programming is the art of algorithm design and the craft of debugging errant code."' },
];

export default function CommentWrapper() {
  useEffect(() => {
    const commentBoxes = document.querySelectorAll('.comment-box');
    commentBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('opacity-100');
      }, index * 300); // Delay the fade-in effect for each comment
    });
  }, []);

  return (
    <>
      <h3 className='title'>Comments</h3>
      <section className='comment-wrapper my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl xl:px-12 xl:max-h-[50rem] items-center mx-auto md:max-h-[65rem] max-xl:max-w-[50rem] max-md:px-4'>
        {comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </section>
    </>
  );
}


