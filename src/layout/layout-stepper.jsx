import { Form } from 'antd';

export default function MLayoutStepper({children}) {
    return(
        <>
            <Form layout={'vertical'}>
                {children}
            </Form>
        </>
    )
}