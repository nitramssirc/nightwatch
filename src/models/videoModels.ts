export enum VideoType {
    TV,
    Movie
}

export class VideoInfo {
    //properties
    src: string;
    title: string;

    //ctor
    constructor(videoTitle: string, videoType: VideoType) {
        switch (videoType) {
            case VideoType.Movie:
                this.src = "assets/videos/Movies" + videoTitle;
                this.title = videoTitle.slice(1); //take off the leading /
                break;
            case VideoType.TV:
                this.src = "assets/videos/TV" + videoTitle
                var splitTitle = videoTitle.slice(1).split("/");

                if (splitTitle.length >= 3) {
                    this.title = splitTitle[0] + ": " + splitTitle[2];
                }
                else {
                    this.title = videoTitle;
                }

                break;
        }

        //Remove .mp4 from the end
        this.title = this.title.replace(".mp4", "");

    }
}

export class VideoListItem {
    displayName: string;
    filename: string;

    constructor(dn: string, f:string) {
        this.filename = f;
        this.displayName = dn;
    }
}