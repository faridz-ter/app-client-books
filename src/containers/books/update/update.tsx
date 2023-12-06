// Import statements...
import { useEffect } from 'react';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { VisuallyHiddenInput } from './update.styled';
import { Box, Stack, Switch, TextField } from '@mui/material';
import useUpdate from './update.hooks';

interface bookId {
    bookId: number
}

export default function Update({ bookId }: bookId) {
    const {
      formValues,
      handleSubmit,
      handleUploadCover,
      loadingCover,
      loadingSubmit,
      setFormValues,
      fileItem,
      loadDataForUpdate,
    } = useUpdate(bookId);
  
    useEffect(() => {
      loadDataForUpdate(bookId);
    }, [bookId, loadDataForUpdate]);
  
    return (
      <CommonPage
        withBack
        component={'form'}
        title="Update Book"
        actionElement={
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loadingSubmit}
          >
            Submit
          </LoadingButton>
        }
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <TextField
            name="title"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Title"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                title: e.target.value,
              })
            }
            variant="filled"
            value={formValues?.title}
          />
          <TextField
            name="author"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Author"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                author: e.target.value,
              })
            }
            variant="filled"
            value={formValues?.author}
          />
          <TextField
            name="isbn"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="ISBN"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                isbn: e.target.value,
              })
            }
            variant="filled"
            value={formValues?.isbn}
          />
          <TextField
            name="published_year"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Published Year"
            type="number"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                published_year: e.target.value,
              })
            }
            variant="filled"
            value={formValues?.published_year}
          />
          <TextField
            name="genre"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Genre"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                genre: e.target.value,
              })
            }
            variant="filled"
            value={formValues?.genre}
          />
          <TextField
            name="total_copies"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Total Copies"
            type="number"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                total_copies: Number(e.target.value),
              })
            }
            variant="filled"
            value={formValues?.total_copies}
          />
          <TextField
            name="copies_available"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Copies Available"
            type="number"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                copies_available: Number(e.target.value),
              })
            }
            variant="filled"
            value={formValues?.copies_available}
          />
          {/* ... other fields ... */}
  
          <LoadingButton
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            sx={{ mb: 3 }}
            loading={loadingCover}
          >
            Upload Book Cover
            <VisuallyHiddenInput
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleUploadCover}
            />
          </LoadingButton>
          {fileItem && fileItem.url && (
            <Box>
              <img
                src={fileItem.secure_url}
                alt="preview"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          )}
          <Box>
            <Stack direction={'row'} alignItems={'center'}>
              <div>Publish</div>
              <Switch
                name="published"
                title="Published"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    published: e.target.checked,
                  })
                }
                checked={formValues?.published}
              />
            </Stack>
          </Box>
        </Box>
      </CommonPage>
    );
  }
  