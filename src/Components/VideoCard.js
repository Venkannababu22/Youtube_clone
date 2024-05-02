const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className="p-2 m-2 w-80 h-80 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt='thumbanil'/>
      <div>
        <ul>
            <li className="font-bold text-md py-2">{title}</li>
            <li className="font-semibold">{channelTitle}</li>
            <li>{statistics.viewCount} views</li>

        </ul>
      </div>
    </div>
  )
}

export default VideoCard
