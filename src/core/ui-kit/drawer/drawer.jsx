import { Drawer, Button, Divider, Image } from 'antd';

export default function MKDrawer(props) {
    return(
        <Drawer
            placement={'bottom'}
            maskClosable={false}
            visible={props.visible}
            closable={false}
            height={'auto'}
        >
            {/* eslint-disable-next-line react/jsx-key */}
            <div className="container text-center">
                {/* eslint-disable-next-line react/jsx-key */}
                <Image src={props.logoUrl} layout="responsive" alt={'drawer-Logo'}/>
                {/* eslint-disable-next-line react/jsx-key */}
                <p className='font-16'>{ props.description }</p>
                {/* eslint-disable-next-line react/jsx-key */}
                <Divider />
                {/* eslint-disable-next-line react/jsx-key */}
                <Button type='danger' size='large' className='font-bold' onClick={props.action}>{props.buttonLabel}</Button>
            </div>
        </Drawer>
    )
}