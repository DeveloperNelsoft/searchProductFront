import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

type color = 'default' | 'inherit' | 'primary' | 'secondary' | undefined;

interface DialogProps {
    variant: string,
    message: any,
title: string,
onClose?: Function,
onConfirm?: Function,
showCancel: Boolean,
confirmLabel: string
}


export default class winDialog extends Component<DialogProps, {}> {
static defaultProps = {
    variant: 'default',
    message: '',
    title: '',
    onClose: () => { },
    onConfirm: () => { },
    showCancel: true,
    confirmLabel: 'Aceptar'
}

render() {
    const { variant, message, title, onClose, onConfirm, confirmLabel, showCancel } = this.props;

    return (
        <Dialog
            open={true}
            onClose={onClose as any}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    showCancel ? (
                        <Button onClick={onClose as any} color="default">
                            Cancelar
                        </Button>
                    ): ''
                }

                <Button onClick={onConfirm as any} color={variant as color} autoFocus>
                    {confirmLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
}
