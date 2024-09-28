import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';


const UserUrlList = () => {
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
      const fetchUrls = async () => {
        try {
          const token = localStorage.getItem('token')
          const response = await fetch('https://url-shortner-9eps.onrender.com/user/urls', {
            headers: {
              'Authorization': `${token}` 
            }
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch URLs');
          }
          
          const data = await response.json();
          setUrls(data.urls);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchUrls();
    }, []);
  
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <Card>
        <CardHeader>Your Shortened URLs</CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Original URL</TableHead>
                <TableHead>Shortened URL</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {urls.map((url) => (
                <TableRow key={url._id}>
                  <TableCell>{url.originalUrl}</TableCell>
                  <TableCell>
                    <a href={url.shortenedUrl} target="_blank" rel="noopener noreferrer">
                      {url.shortenedUrl}
                    </a>
                  </TableCell>
                  <TableCell>{formatDate(url.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  };
  
  export default UserUrlList;