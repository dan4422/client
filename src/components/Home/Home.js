import { AppBar, Button, Container, Grid, Grow, Paper, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from './styles'
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)  
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])

  const searchPost = () => {
    if (search.trim() || tags) {
      //dispatch action to fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
      history.push(`/posts/search?searchQuery=${search ||'none'}&tags=${tags.join(',')}`)
    } else {
      history.push('/')
    }
  }

  const handleKeyPress = (e) => {
    // keycode 13 is the enter key
    if (e.keyCode === 13) {
      searchPost()
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag])

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  return (
    <Grow in>
    <Container maxWidth="xl">
      <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems='stretch' spacing={3}>
        <Grid item xs={12} sm={6} md={9}>
          <Posts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <TextField name="search" variant="outlined" label="Search Memories"
            fullWidth
            value={search}
            onKeyDown={handleKeyPress}
            onChange={(e) => setSearch(e.target.value)}
            />
            <ChipInput 
              style={{ margin: '10px 0'}}
              value={tags}
              onAdd={handleAdd}
              onDelete={handleDelete}
              label="Search Tags"
              variant="outlined"
            />
            <Button onClick={searchPost} variant="contained" className={classes.searchButton} color="primary">Search</Button>
          </AppBar>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <Paper elevation={6}>
            <Pagination page={page}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home