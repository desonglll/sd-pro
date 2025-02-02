import {Card} from "antd";
import axios from "axios";
import {ToothProps} from "../../props.ts";

function ToothCard({tooth}: { tooth: ToothProps[] }) {

    return (
        tooth.map((toothItem, toothIndex) => (
            <Card.Grid key={toothIndex}>
                <Card
                    cover={
                        <img
                            alt={toothItem.name}
                            src={axios.defaults.baseURL + toothItem.image}
                        />
                    }
                >
                    <Card.Meta title={toothItem.name}
                               description={toothItem.description}/>
                </Card>
            </Card.Grid>
        ))
    )
}

export default ToothCard;