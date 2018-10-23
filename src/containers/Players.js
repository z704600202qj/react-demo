import {connect} from 'react-redux'
import {showPlayer, changeSong} from "../redux/actions"
import Players from "../components/play/Players"

//映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    showStatus: state.showStatus,
    currentSong: state.song,
    playSongs: state.songs
})

const mapDispatchToProps = (dispatch) => ({
    showMusicPlayer: (status) => {
        dispatch(showPlayer(status));
    },
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players)
