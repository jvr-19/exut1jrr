import { useState } from 'react'
import '../App.css'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Noticia({ avatar, altavatar, titulo, fecha, imagen, alt, noticia, likesdefault }) {
    const [likes, setLikes] = useState(likesdefault);
    const [meGusta, setMeGusta] = useState(false);
    const [enable, setEnabled] = useState(false);
    const [open, setOpen] = useState(false);
    
    const handleMeGusta = () => {
        if (meGusta) {
            setLikes(likes - 1)
            setEnabled(false)
        } else {
            setLikes(likes + 1)
            setEnabled(true)
        }
        setMeGusta(!meGusta);
    };

    const handleShare = (e) => {
        setOpen(true)
    }

    const handleClose = (e) => {
        setOpen(false)
    }

    const handleWhats = (e) => {
        console.log('Enviando por Whatsapp ...')
    }

    const handleTele = (e) => {
        console.log('Enviando por Telegram ...')
    }

    return (
        <>
            <Card sx={{ margin: '20px auto' }}>
                <CardHeader avatar={<Avatar src={avatar} align='right' alt={altavatar}></Avatar>} title={titulo} subheader={fecha} action={<MoreVertIcon align='left'></MoreVertIcon>} />
                <CardMedia
                    component="img"
                    height={194}
                    image={imagen}
                    alt={alt}
                />
                <CardContent>
                    <Typography variant="body2" align='justify'>
                        {noticia}
                    </Typography>
                </CardContent>
                <CardActions>
                    {likes}
                    <IconButton onClick={handleMeGusta}>
                        {meGusta ? <FavoriteIcon sx={{ color: '#634FA2' }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton disabled={!enable} onClick={handleShare}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    COMPARTIR
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿A través de que plataforma quieres compartir?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}><WhatsAppIcon onClick={handleWhats} /></Button>
                    <Button onClick={handleClose}><TelegramIcon onClick={handleTele} /></Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default Noticia
