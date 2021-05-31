import { Circle } from 'better-react-spinkit'

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img src="/logo.png" alt=""
                    height={200}
                    style={{marginBottom: 10}}
                />
                <Circle color="#3cbc28" size={60} />
            </div>
        </center>
    )
}

export default Loading
