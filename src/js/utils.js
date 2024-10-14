import { getImage } from "astro:assets";

export async function getOptimizedImage(image) {
  const optimizedImage = await getImage({
    src: image,
    format: "webp",
  });

  return optimizedImage
}

// Learn more agout the getImage() function here
// https://docs.astro.build/en/guides/images/#generating-images-with-getimage