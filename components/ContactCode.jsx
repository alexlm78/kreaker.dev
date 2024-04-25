import styles from "../styles/ContactCode.module.css";

const contactItems = [
	{
		social: "Email",
		link: "alejandro@kreaker.me",
		href: "mailto:alejandro@kreaker.me",
	},
	{
		social: "LinkedIn",
		link: "linkedin.com/in/alexlm78",
		href: "https://www.linkedin.com/in/alexlm78/",
	},
	{
		social: "GitHub",
		link: "github.com/alexlm78",
		href: "https://github.com/alexlm78",
	},
	{
		social: "Twitter",
		link: "twitter.com/alexlm78",
		href: "https://twitter.com/alexlm78",
	},
	{
		social: "Instagram",
		link: "instagram.com/alexlm78",
		href: "https://www.instagram.com/alexlm78/",
	},
	{
		social: "StackOverflow",
		link: "stackoverflow.com/users/9525502/",
		href: "https://stackoverflow.com/users/9525502/alejandro-lopez-monzon",
	},
	{
		social: "Website",
		link: "kreaker.dev",
		href: "https://kreaker.dev",
	},
];

const ContactCode = () => {
	return (
		<div className={styles.code}>
			<p className={styles.line}>
				tag: <a>production</a>
			</p>
			<p className={styles.line}>
				<span>Alejandro</span>&#58;
			</p>
			<p className={styles.line}>
				&nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
			</p>
			{contactItems.slice(0, 8).map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
				</p>
			))}
			{contactItems.slice(8, contactItems.length).map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
				</p>
			))}
		</div>
	);
};

export default ContactCode;

/**
  {
    social: 'Google Scholar',
    link: 'scholar.google.com/citations?user=b___QQ8AAAA',
    href: 'https://scholar.google.com/citations?user=b___QQ8AAAAJ&hl=en&authuser=1&oi=sra',
  },
  {
    social: 'PyPi',
    link: 'pypi.org/user/drkostas',
    href: 'https://pypi.org/user/drkostas/',
  }, 
 */
