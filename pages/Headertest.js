import Link from 'next/link';


export default function HeaderTest() {
     return (
     //make the div element inline so it can be styled
     <div className="header1">
     <ul className="navnav">
     <li><Link href="/"><a><h1>About me</h1></a></Link></li>
     <li><Link href="/"><a><h1>About me2</h1></a></Link></li>
     <li> <Link href="/"><a><h1>About me3</h1></a></Link></li>
     </ul>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        .header1 {
          color: blue;
          display: inline;
        }
        .Header1 {
          color: red;
          display: inline;
     }
     .navnav {
           display: inline;
     }

     .navnav li {
          display: inline-block;
          padding: inherit;


     }
      `}</style>

    </div>
  )}
