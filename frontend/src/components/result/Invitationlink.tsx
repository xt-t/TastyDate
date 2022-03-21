import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Button, Card, CardContent, TextField} from "@mui/material";
import "./VoteResult.scss"

interface InvitationlinkProps {
    tastyDateId?: string
}

export default function Invitationlink({tastyDateId}: InvitationlinkProps) {


    const link = `https://tastydate.herokuapp.com/overview/${tastyDateId}`

    const copyInvitationlink = () => {
        navigator.clipboard.writeText(link);
    }

    return (
        <Card className="invitationCard" style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
            <CardContent className="invitationCardContent">
                <h3>Send the link to your<br/> desired participants</h3>
                <TextField
                    id="standard-read-only-input"
                    multiline rows={2}
                    label=""
                    defaultValue={link}
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