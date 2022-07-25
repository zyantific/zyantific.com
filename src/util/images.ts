import type { ImageMetadata } from '@astrojs/image/components';

async function loadImage(lazyFile: () => any) {
	const { default: image } = await lazyFile();
	return image as ImageMetadata;
}

const blogImages = import.meta.glob('/src/assets/blog/*');

export async function blogImage(pathname: string): Promise<ImageMetadata | undefined> {
	return pathname in blogImages ? await loadImage(blogImages[pathname]) : undefined;
}
