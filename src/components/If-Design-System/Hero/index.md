// // import React from "react";
// // import Breadcrumbs from '../Breadcrumbs';
// // interface IOwnProps {
// //   title;
// //   image?;
// //   lead_text?;
// //   navigationContainer;
// //   backgroundColor?;
// //   headingSize?;
// //   useBreadcrumbs:boolean;
// // }

// const Hero =({title, image, lead_text, navigationContainer, backgroundColor, headingSize, useBreadcrumbs}: IOwnProps) => {
//   const background = backgroundColor
//     ? `color background ${backgroundColor}`
//     : "";
//   const heading = headingSize ? headingSize : "large";
//   return (
//     <section className={`if hero reverse ${background}`}>
//       <div className="if container">
//         {/* {useBreadcrumbs ? <Breadcrumbs/> : null} */}
//         <div className="if content">
//           <h1 className={`if heading ${heading}`}>{title}</h1>
//           <p>
//             {lead_text}
//           </p>
//           {navigationContainer}
//         </div>
//         {image}
//       </div>
//     </section>
//   );
// };

// export const HeroImage = (props) =>{
//   return <div
//             className={`if image${props.class}`} 
//             style={{ backgroundImage: `url(${props.imgSrc})`, backgroundPositionY:'10%'}}
//             {...props.dataAttrs}
//             role="img" aria-label={props.alt}
//             >
//           </div>
// }

// export default Hero