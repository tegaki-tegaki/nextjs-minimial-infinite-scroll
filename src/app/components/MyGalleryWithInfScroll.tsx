"use client";

import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";

export const MyGalleryWithInfScroll = () => {
	const [imageUrls, setImageUrls] = useState<string[]>([])
	const [offset, setOffset] = useState(1)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		(async () => {
			const fetchResults = await fetch('/api/images?offset=0')
			const _imageUrls = await fetchResults.json()
			setImageUrls(_imageUrls)
		})()
	}, [])

	const fetchMoreImages = () => {
		(async () => {
			const fetchResults = await fetch(`/api/images?offset=${offset}`)
			const _imageUrls = await fetchResults.json()
			console.log(_imageUrls);
			if (_imageUrls.length === 0) {
				setHasMore(false);
				return;
			}
			setImageUrls(imageUrls.concat(_imageUrls));
			setOffset(offset + 1);
		})()
	}

	return <div>
		<InfiniteScroll
			dataLength={imageUrls.length}
			next={fetchMoreImages}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
		>
			{imageUrls.map((i) => {
				return <img src={i} />
			})}
		</InfiniteScroll>
	</div>
}
