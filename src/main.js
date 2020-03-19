// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import VueScrollReveal from "gridsome-scroll-reveal";

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.use(VueScrollTo, {
		duration: 2500,
		easing: "ease-in-out"
	});

	Vue.use(VueScrollReveal, {
		class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
		duration: 800,
		scale: 1,
		distance: "10px",
		mobile: false
	});

	Vue.use(VueFuse);

	head.meta.push({
		name: "keywords",
		content:
			"Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS,VCET,Cris,Glug,Infinite,crstnmac"
	});

	head.meta.push({
		name: "description",
		content: "Portfolio"
	});

	head.meta.push({
		name: "author",
		content: "Criston Mascarenhas"
	});

	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Sen:400,700,800"
	});
}
