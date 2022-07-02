import styles from './SideHeaderStyles.module.css';

export default function SideHeader({}) {
  return (
    <ul className="ul">
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  )
}

