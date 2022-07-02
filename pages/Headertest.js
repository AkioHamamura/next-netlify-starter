import Link from 'next/link';


export default function HeaderTest() {
     return (
     //make the div element inline so it can be styled
     <div className="header">
     
      <Link href="/"><a><h1>About me</h1></a></Link><Link href="/"><a><h1>About me2</h1></a></Link><Link href="/"><a><h1>About me3</h1></a></Link>

      <style jsx>{`
        .container {
          margin: 50px;
        }
        .header {
          color: blue;
          display: inline;
        }
      `}</style>

    </div>
  )}
