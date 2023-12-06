import { Button, Stack, Item } from "@mui/material";
import useAction from "./detail.hooks";
import CommonPage from "../../../components/common-page/common-page";

export default function Detail() {
    const {
        books,
        loading,
        meta
    } = useAction();

    return(
        <CommonPage
            withBack
            title="Detail Books"
        >
            <Stack direction="row" spacing={1}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </CommonPage>
    )

}