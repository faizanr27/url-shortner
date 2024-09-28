import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

const UserUrlList = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch('https://url-shortner-9eps.onrender.com/api/user/urls', {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`
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
                <TableCell>{format(new Date(url.createdAt), 'PPP')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserUrlList;