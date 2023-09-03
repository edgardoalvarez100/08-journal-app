import { Typography } from "@mui/material"
import { MailOutline } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis consequatur et maxime earum itaque odit illo blanditiis reiciendis saepe, aspernatur reprehenderit odio unde, quod, pariatur esse. At, cum minus.</Typography> */}
            {/* <NothingSelectedView /> */}
            <NoteView />
        </JournalLayout>
    )
}
