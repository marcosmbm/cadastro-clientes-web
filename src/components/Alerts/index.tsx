import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';
import { AlertStatus } from '@chakra-ui/react';

export interface AlertsProps{
    message: string;
    status?: AlertStatus;
    closeAlert?: () => void;
}

interface titlesStatus{
    error: string;
    success: string;
    warning: string;
    info: string;
    loading: string;
}

export default function Alerts({message, status, closeAlert}: AlertsProps) {

    function getTitle(status: string = 'Erro'): string{
        let obj: titlesStatus = {
            error: 'Erro',
            success: 'Sucesso',
            warning: 'Atenção',
            info: 'Informação',
            loading: 'Aguarde'
        }

        return obj[status as keyof titlesStatus];
    }

    const title = getTitle(status);

  return (
    <Alert status={status} mt={2}>
        <AlertIcon />
        <AlertTitle>{title}: </AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        
        {
            closeAlert &&
                <CloseButton    
                    size='sm'     
                    position='absolute'
                    right={0}
                    top={0}
                    onClick={closeAlert}
                />
        }
    </Alert>
  );
}