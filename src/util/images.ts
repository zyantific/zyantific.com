async function loadImage(lazyFile: () => any) {
	const { default: image } = await lazyFile();
	return image;
}

const blogImages = import.meta.glob('/src/assets/blog/*');

export async function blogImage(pathname: string) {
	return pathname in blogImages ? await loadImage(blogImages[pathname]) : undefined;
}
