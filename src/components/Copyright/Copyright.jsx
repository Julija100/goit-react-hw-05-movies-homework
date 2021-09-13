import Typography  from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          color="inherit"
          href="https://github.com/Julija100"
          target="_blank"
          rel="noopener noreferrer"
            > Julia Faltina</Link>
            {' '}
            {new Date().getFullYear()}
            {' '}
      </Typography>
    );
}

export { Copyright };