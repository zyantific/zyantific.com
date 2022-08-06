async function loadImage(lazyFile: () => any) {
	const { default: image } = await lazyFile();
	return image;
}
// @ts-ignore - VITE BUG
const blogImages = import.meta.glob('/src/assets/blog/*');
// @ts-ignore - VITE BUG
const authorImages = import.meta.glob('/src/assets/avatars/*');

const allImages = {
	...blogImages,
	...authorImages,
};

export async function blogImage(pathname: string) {
	return pathname in allImages ? await loadImage(allImages[pathname]) : undefined;
}
