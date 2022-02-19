import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Button, Card, CardContent, TextField} from "@mui/material";
import "./Tables.scss"

interface InvitationlinkProps {
    tastyDateId?: string
}

export default function Invitationlink ({tastyDateId}:InvitationlinkProps) {


    const link = `https://tastydate.herokuapp.com/overview/${tastyDateId}`

    const copyInvitationlink = () => {
        navigator.clipboard.writeText(link);
    }

    return (
        <Card className="invitationCard">
            <CardContent className="invitationCardContent">
                <h3>Send the link to your desired participants</h3>
                <TextField
                    id="standard-read-only-input"
                    label=""
                    defaultValue= {link}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    className="invitationText"
                    onClick={copyInvitationlink}
                />
                <Button variant="contained" onClick={copyInvitationlink}><ContentCopyIcon/>Copy</Button>
            </CardContent>
        </Card>
    )
}