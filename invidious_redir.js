// Utils
const getInvidiousDomain = () => 'https://yewtu.be'

const getRedirectUrlForVideoId = (videoId) => {
    const url = new URL(`${getInvidiousDomain()}/watch?v=${videoId}`)
    return url.toString()
}

const getVideoIdFromUrl = (url) => new URL(url).searchParams.get("v")

// Handler
const requestHandler = (req) => {
    const videoId = getVideoIdFromUrl(req.url)
    if (videoId) {
        return {
            redirectUrl: getRedirectUrlForVideoId(videoId)
        }
    }
}

// Listeners
const filter = "*://*.youtube.com/watch?v=*"
browser.webRequest.onBeforeRequest.addListener(requestHandler, {
    urls: [filter]
}, ["blocking"])