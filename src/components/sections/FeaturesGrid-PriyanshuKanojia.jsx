import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesGrid({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Features',
    subtitle = 'Why Choose Us',
    description = 'Discover the key features that make our platform stand out from the competition.',
    columns = '3',
  } = content || {};

  // Fallback features if items are not provided
  const features = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Modern Design',
          subtitle: 'Beautiful UI',
          description: 'Clean and modern interface that looks great on any device.',
          icon: 'palette',
          image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
          position: 0,
        },
        {
          id: '2',
          title: 'Fast Performance',
          subtitle: 'Optimized Speed',
          description: 'Lightning-fast loading times and smooth interactions.',
          icon: 'zap',
          image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
          position: 1,
        },
        {
          id: '3',
          title: 'Secure Platform',
          subtitle: 'Enterprise Security',
          description: 'Bank-level security to keep your data safe and protected.',
          icon: 'shield',
          image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
          position: 2,
        },
      ];

  // Calculate grid columns based on configuration
  const getGridCols = () => {
    switch (columns) {
      case '2':
        return 'grid-cols-1 md:grid-cols-2';
      case '4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case '3':
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          {subtitle && (
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Features grid */}
        {features.length > 0 && (
          <div className={`grid gap-8 ${getGridCols()}`}>
            {features.map((feature) => (
              <Card key={feature.id} className="flex flex-col">
                {feature.image_url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={feature.image_url}
                      alt={feature.title || 'Feature image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  {feature.icon && (
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <i className={`icon-${feature.icon} text-2xl`} />
                    </div>
                  )}
                  {feature.title && (
                    <CardTitle>{feature.title}</CardTitle>
                  )}
                  {feature.subtitle && (
                    <CardDescription>{feature.subtitle}</CardDescription>
                  )}
                </CardHeader>
                {feature.description && (
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 