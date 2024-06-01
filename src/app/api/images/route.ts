import { NextRequest, NextResponse } from "next/server"

const images = [
	"https://picsum.photos/seed/1/200/200",
	"https://picsum.photos/seed/2/200/200",
	"https://picsum.photos/seed/3/200/200",
	"https://picsum.photos/seed/4/200/200",
	"https://picsum.photos/seed/5/200/200",
	"https://picsum.photos/seed/6/200/200",
	"https://picsum.photos/seed/7/200/200",
	"https://picsum.photos/seed/8/200/200",
	"https://picsum.photos/seed/9/200/200",
	"https://picsum.photos/seed/10/200/200",
	"https://picsum.photos/seed/11/200/200",
	"https://picsum.photos/seed/12/200/200",
	"https://picsum.photos/seed/13/200/200",
	"https://picsum.photos/seed/14/200/200",
	"https://picsum.photos/seed/15/200/200",
	"https://picsum.photos/seed/16/200/200",
	"https://picsum.photos/seed/17/200/200",
	"https://picsum.photos/seed/18/200/200",
	"https://picsum.photos/seed/19/200/200",
	"https://picsum.photos/seed/20/200/200",
	"https://picsum.photos/seed/21/200/200",
	"https://picsum.photos/seed/22/200/200",
	"https://picsum.photos/seed/23/200/200",
	"https://picsum.photos/seed/24/200/200",
	"https://picsum.photos/seed/25/200/200",
	"https://picsum.photos/seed/26/200/200",
	"https://picsum.photos/seed/27/200/200",
	"https://picsum.photos/seed/28/200/200",
	"https://picsum.photos/seed/29/200/200",
	"https://picsum.photos/seed/30/200/200",
	"https://picsum.photos/seed/31/200/200",
	"https://picsum.photos/seed/32/200/200",
]

const LIMIT = 10;

const processResponse = (offset: number) => {
	const start = offset * LIMIT
	const end = start + LIMIT
	return NextResponse.json(images.slice(start, end))
}

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams
	const offset = searchParams.get('offset')

	if (!offset) {
		return processResponse(0)
	}

	const offsetNum = parseInt(offset);

	if (isNaN(offsetNum)) {
		return new NextResponse('offset is not set to a number e.g="...?offset=2"', { status: 400 })
	}

	return processResponse(offsetNum)
}
