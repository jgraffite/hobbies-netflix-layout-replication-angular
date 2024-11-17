import { YouTubePlayer } from '@angular/youtube-player';

export class VideoController {
    protected videoPlayer!: YouTubePlayer;

    public isVideoPlaying: boolean = false;
    public isVideoEnded: boolean = false;
    public isVideoMuted: boolean = true;

    public playerConfig = {
        controls: 0,
        mute: 1,
        autoplay: 1,
    };

    protected playVideo() {
        //this.videoPlayer.unMute();
        this.videoPlayer?.playVideo();
    }

    protected stopVideo() {
        this.muteVideo();
        this.videoPlayer?.stopVideo();
    }

    public toggleVideoMute() {
        if (this.videoPlayer?.isMuted()) {
            this.videoPlayer?.playVideo();
            this.videoPlayer?.unMute();
            this.isVideoMuted = false;
        } else {
            this.muteVideo();
        }
    }

    public muteVideo() {
        this.videoPlayer?.mute();
        this.isVideoMuted = true;
    }

    onVideoStateChange(e: any) {
        switch (e.data) {
            case YT.PlayerState.PLAYING:
                this.isVideoPlaying = true;
                this.isVideoEnded = false;
                break;

            case YT.PlayerState.ENDED:
                this.isVideoPlaying = false;
                this.isVideoEnded = true;
                this.muteVideo();
                break;
        }
    }
}
