import {listing} from "../../core/data/static/listing";
import {Typography} from "antd";

export default function MSListing({ listId }) {
    const pageInfo = listing[listId];
    return(
        <div className={'container pt-40 pb-30'}>
            <Typography.Title
                key={'listingTitle'}
                className={'d-block text-center c-green'}
            >
                {pageInfo.title}
            </Typography.Title>
            <Typography.Title
                key={'listingSubTitle'}
                level={3}
                className={'d-block c-red'}
            >
                “{pageInfo.subTitle}”
            </Typography.Title>
            {
                pageInfo.paragraphs.map((el, index) => (
                    <p key={'description' + index} className={'font-20'}>{el}</p>
                ))
            }
        </div>
    )
}