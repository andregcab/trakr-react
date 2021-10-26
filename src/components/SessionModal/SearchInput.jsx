import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import parse from 'autosuggest-highlight/parse';
import { useQuery } from '@apollo/client';
import { CLIENTS } from 'graphql/queries';
// import useThr from 'lodash';

// for not only searches for clients :(
const SearchInput = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const { loading, data, error } = useQuery(CLIENTS, { variables: { searchTerm: inputValue } });

  useEffect(() => {
    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }
  }, [value, inputValue]);
  if (loading && !data) return '';
  //   const fetch = useMemo(
  //     () =>
  //       throttle((request, callback) => {
  //         autocompleteService.current.getPlacePredictions(request, callback);
  //       }, 200),
  //     [],
  //   );

  return (
    <Autocomplete
      id="typeahead-search"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.clientName}
      filterOptions={(x) => x}
      options={data.clients}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField className="my-2" {...params} label="Search for a client..." fullWidth />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item xs>
                <span
                  key={option.id}
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {option.clientName}
                </span>

                <Typography variant="body2" color="text.secondary">
                  {option.name}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};

export default SearchInput;
