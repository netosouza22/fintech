const style: React.CSSProperties = {
    border: 'var(--gap-s) solid var(--color-3)',
    borderRightColor: 'var(--color-4)',
    width: 'var(--gap)',
    height: 'var(--gap)',
    borderRadius: '50%',
    animation: 'spin 1s infinite',
}

export function Loading() {
    return (
        <div style={style}>
            <style>
                {`@keyframes spin { 
                  to 
                  {
                    tranform: rotate(360deg);
                  }
            }`}
            </style>
        </div>
    )
}
